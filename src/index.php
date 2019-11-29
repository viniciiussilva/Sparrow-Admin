<?php
print_r(realpath(dirname(__FILE__, 2) . '/src/config/Database.php'));

require_once dirname(__FILE__, 2) . '/src/config/Database.php';

$conexao = new Database();
var_dump($conexao->getConection());

Database::getConection();