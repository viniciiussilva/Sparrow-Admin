<?php

class Database
{

    public function __construct()
    {
        getConection();
    }

    public static function getConection()
    {
        //primeiro passo , pegar caminho do arquivo de co0nfiguração ENV
        $pathEnv = realpath(dirname(__FILE__, 2) . '/env_dev.ini');

        //segundo passo, pegar as chaves do arquivo de configuração ENV
        $env = parse_ini_file($pathEnv);

        $conn = new mysqli($env['host'], $env['username'], $env['password'], $env['Database']);
        $conn->set_charset("utf8");
        if ($conn->connect_error) {
            die("Erro: " . $conn->error);
        }

        return $conn;
    }
}