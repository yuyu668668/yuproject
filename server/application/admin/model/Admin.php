<?php
namespace app\admin\model;

class Admin extends BaseModel {

    protected $pk = 'id';
    protected $table = 'yu_admin';
    public function login () {
        echo self::find();
    }

}