<?php
include '../config.php';

// get post datas
foreach($_GET as $key => $value) {
    $$key = trim($value);
    if(!Library_Validation::antiSql($value)) {
        echo json_encode(array('code' => 1, 'msg' => 'Dữ liệu có vấn đề!'));
        exit();
    }
}

if($end_date != '' && $start_date != '') {
    $arr_start_date = explode('/', $start_date);
    $arr_end_date = explode('/', $end_date);
    $start_limit = mktime(0, 0, 0, $arr_start_date[1], $arr_start_date[0], $arr_start_date[2]);
    $end_limit = mktime(23, 59, 59, $arr_end_date[1], $arr_end_date[0], $arr_end_date[2]);
}
else {
    $start_limit = mktime(0, 0, 0, date('m'), date('d'), date('Y'));
    $end_limit = mktime(23, 59, 59, date('m'), date('d'), date('Y'));
}
if ($type==1) {
     $check ="AND (msg like '%hanh toan thanh cong cho thue bao%' or msg like '%uy khach da nap thanh cong%')";
}
elseif ($type==2) {
    $check ="AND (msg NOT like '%thanh toan thanh cong cho thue bao%' and msg NOT like '%uy khach da nap thanh cong%' and msg NOT like '%Nạp thẻ thành công%')";
    
}elseif ($type==3) {
    $check ="AND (msg like '%ERROR%' or msg like '%+CUSD: 4%')";
}
elseif ($type==4) {
    $check ="AND (msg like '%Hien tai he thong dang ban%')";
}
elseif ($type==5) {
    $check ="AND (msg like '%trong ngay %' or msg like '%khong duoc chap nhan, vui long%' or msg like '%toi da 5 giao dich%') ";
}

$models_logcards = new Models_LogCards();
$list = $models_logcards->customQuery("SELECT * FROM LogCards WHERE id > 54264 AND time BETWEEN $start_limit AND $end_limit $check ORDER BY id DESC");
?>
<table class="table table-hover">
    <thead>
        <tr>
            <th>#</th>
            <th>Pin</th>
            <th>Seri</th>
            <th>Price</th>
            <th>Thời gian</th>
            <th>MSG</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $stt = 0;
        $total = 0;
        $models_phones = new Models_Phones();
        foreach ($list as $obj) {
            $stt++;
        ?>
            <tr>
                <td><?= $stt ?></td>
                <td><?= $obj->pin ?></td>
                <td><?= $obj->seri ?></td>
                <td><?= $obj->price ?></td>
                <td><?= date('d/m/Y - H:i:s', $obj->time) ?></td>
                <td><?= $obj->msg ?></td>
            </tr>
        <?php
        }
        ?>
    </tbody>
</table>