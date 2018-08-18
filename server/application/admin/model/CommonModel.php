<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 2018/8/17
 * Time: 9:09
 */

namespace app\admin\model;


class CommonModel extends BaseModel
{
    public function __construct()
    {
        parent::__construct();
    }

    // 检查登陆的token
    public function check_token($token) {

        $admin = new \app\admin\model\Admin();
        $res = $admin->field('token_expire')->where('token', $token)->select();

        if (!empty($res)) {
            if (time() - $res[0]['token_expire'] > 0) {
                return 10003;  //token过期，需要重新登陆
            }
            $new_token_expire = time() + 604800;  //设置新的token过期时间
            $res = $admin->isUpdate(true)
                ->where('token', $token)
                ->update('token_expire', $new_token_expire);
            if ($res) {
                return 30001;  //token验证成功
            }
        }
    }


}