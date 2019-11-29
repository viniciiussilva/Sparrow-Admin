<?php

print_r(realpath(dirname(__FILE__, 2) . '/env_dev.ini'));
class Database
{
    public static function getConection()
    {
        //primeiro passo , pegar caminho do arquivo de co0nfiguração ENV
        $pathEnv = realpath(dirname(__FILE__, 2) . '/env_dev.ini');

        //segundo passo, pegar as chaves do arquivo de configuração ENV
        $env = parse_ini_file($pathEnv);

        $conn = new mysqli($env['host'], $env['username'], $env['password'], $env['Database']);

        if ($conn->connect_error) {
            die("Erro: " . $conn->error);
        }

        return $conn;
    }
}