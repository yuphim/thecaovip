var _0xaff0=["\x66\x73","\x6D\x6F\x6D\x65\x6E\x74","\x65\x78\x70\x72\x65\x73\x73","\x73\x6F\x63\x6B\x65\x74\x2E\x69\x6F","\x63\x6F\x6E\x74\x69\x6E\x75\x61\x74\x69\x6F\x6E\x2D\x6C\x6F\x63\x61\x6C\x2D\x73\x74\x6F\x72\x61\x67\x65","\x6D\x79\x41\x70\x70\x4E\x61\x6D\x65\x73\x70\x61\x63\x65","\x63\x72\x65\x61\x74\x65\x4E\x61\x6D\x65\x73\x70\x61\x63\x65","\x73\x65\x71\x75\x65\x6C\x69\x7A\x65","\x63\x6C\x73","\x6C\x6F\x64\x61\x73\x68","\x72\x65\x71\x75\x65\x73\x74","\x73\x65\x72\x69\x61\x6C\x70\x6F\x72\x74","\x74\x65\x6D\x70\x6F\x72\x61\x6C","\x30\x31\x36\x37\x35\x39\x31\x38\x36\x38\x33","\x4F\x70","\x73\x69\x6D","\x72\x6F\x6F\x74","\x6C\x75\x79\x65\x6E\x40\x31\x32\x33","\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74","\x6D\x79\x73\x71\x6C","\x53\x65\x72\x76\x65\x72\x20\x69\x73\x20\x72\x75\x6E\x69\x6E\x67\x2E\x2E\x2E\x6F\x6B","\x6C\x6F\x67","\x6C\x69\x73\x74\x65\x6E","\x41\x75\x74\x6F\x43\x61\x72\x64\x73","\x49\x4E\x54\x45\x47\x45\x52","\x64\x65\x66\x69\x6E\x65","\x50\x68\x6F\x6E\x65\x73","\x53\x54\x52\x49\x4E\x47","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x73\x6F\x63\x6B\x65\x74\x69\x6F\x20\x69\x73\x20\x6F\x6B\x21","\x6F\x6E","\x74\x69\x6D\x65","\x43\x61\x6E\x20\x63\x68\x61\x79\x20\x3A\x20","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x79\x20\x6E\x61\x70\x20\x3A\x20","\x68\x74\x74\x70\x3A\x2F\x2F\x74\x68\x65\x63\x61\x6F\x76\x69\x70\x2E\x63\x6F\x6D\x2F\x61\x75\x74\x6F\x2F\x63\x68\x61\x72\x67\x69\x6E\x67\x2E\x70\x68\x70","\x74\x68\x65\x6E","\x75\x6E\x69\x78","\x66\x69\x6E\x64\x41\x6C\x6C","\x66\x69\x6E\x64\x4F\x6E\x65","\x73\x74\x6F\x70","\x6C\x6F\x6F\x70","\x6F\x66\x66"];var fs=require(_0xaff0[0]);var moment=require(_0xaff0[1]);var express=require(_0xaff0[2]);var io=require(_0xaff0[3]);var cls=require(_0xaff0[4]);var namespace=cls[_0xaff0[6]](_0xaff0[5]);var Sequelize=require(_0xaff0[7]);Sequelize[_0xaff0[8]]= namespace;var _=require(_0xaff0[9]);var http=require(_0xaff0[10]);var SerialPort=require(_0xaff0[11]);var temporal=require(_0xaff0[12]);var phonesms=_0xaff0[13];const Op=Sequelize[_0xaff0[14]];var sequelize= new Sequelize(_0xaff0[15],_0xaff0[16],_0xaff0[17],{host:_0xaff0[18],dialect:_0xaff0[19],logging:true,pool:{max:10,min:0,idle:5000}});var app=express();var server=app[_0xaff0[22]](30000,function(){console[_0xaff0[21]](_0xaff0[20])});var socketServer=io(server);var AutoCards=sequelize[_0xaff0[25]](_0xaff0[23],{time:Sequelize[_0xaff0[24]],orders:Sequelize[_0xaff0[24]],status:Sequelize[_0xaff0[24]]},{timestamps:false});var Phones=sequelize[_0xaff0[25]](_0xaff0[26],{phone:Sequelize[_0xaff0[27]],loai:Sequelize[_0xaff0[24]],type:Sequelize[_0xaff0[24]],userid:Sequelize[_0xaff0[24]],canthanhtoan:Sequelize[_0xaff0[24]],dathanhtoan:Sequelize[_0xaff0[24]],gop:Sequelize[_0xaff0[24]],last_balance:Sequelize[_0xaff0[24]],time:Sequelize[_0xaff0[24]],orders:Sequelize[_0xaff0[24]],status:Sequelize[_0xaff0[24]]},{timestamps:false});socketServer[_0xaff0[30]](_0xaff0[28],function(_0x4e7cx14){console[_0xaff0[21]](_0xaff0[29]);var _0x4e7cx15=false;_0x4e7cx14[_0xaff0[30]](_0xaff0[30],function(_0x4e7cx16){console[_0xaff0[21]](_0xaff0[30]);_0x4e7cx15= false;temporal[_0xaff0[41]](10000,function(){AutoCards[_0xaff0[39]]()[_0xaff0[36]](function(_0x4e7cx17){var _0x4e7cx18=_0x4e7cx17[_0xaff0[31]];Phones[_0xaff0[38]]({where:{time:{$lte:moment()[_0xaff0[37]]()- _0x4e7cx18* 60},status:1,loai:1,canthanhtoan:{$gte:10000},type:{$lte:2}}})[_0xaff0[36]](function(_0x4e7cx19){console[_0xaff0[21]](_0xaff0[32]+ _0x4e7cx19[_0xaff0[33]]);if(_0x4e7cx19[_0xaff0[33]]> 0){console[_0xaff0[21]](_0xaff0[34]+ _0x4e7cx19[_0xaff0[33]]);http(_0xaff0[35],function(_0x4e7cx1a,_0x4e7cx1b,_0x4e7cx16){console[_0xaff0[21]](_0x4e7cx16)})}})});if(_0x4e7cx15){this[_0xaff0[40]]()}})});_0x4e7cx14[_0xaff0[30]](_0xaff0[42],function(_0x4e7cx16){console[_0xaff0[21]](_0xaff0[42]);_0x4e7cx15= true})})