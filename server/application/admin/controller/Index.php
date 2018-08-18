<?php
namespace app\admin\controller;
use app\admin\model\Admin;
use think\Controller;

class Index extends Controller
{
    // 后台登陆
    public function login()
    {
        $username = $this->request->post('username');
        $password = $this->request->post('password');
        if (!$username) {
            return null;
        }
        if (!$password) {
            return null;
        }
        echo $username;
    }
}