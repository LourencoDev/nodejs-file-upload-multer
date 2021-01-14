/**
 *
 * @Description 文件上传配置
 * @Author Amor
 * @Created 2016/04/27 17:50
 * 技术只是解决问题的选择,而不是解决问题的根本...
 * 我是Amor,为发骚而生!
 *
 */
const multer = require('multer');
const md5 = require('md5');
const config = require('./config')

const upload = multer({
    storage: multer.diskStorage({
        //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
        //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
        destination: config.upload.path,
        //TODO:文件区分目录存放
        //给上传文件重命名
        filename: (req, file, cb) => {
            const fileFormat = (file.originalname).split(".");
            cb(null, file.fieldname + "." + fileFormat[fileFormat.length - 1]);
        }
    });
});

module.exports = upload;
