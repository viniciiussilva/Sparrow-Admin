<?php

//configuraçoes data e hora padrão
date_default_timezone_set('America/Sao_Paulo'); //https://www.php.net/manual/pt_BR/timezones.america.php
setlocale(LC_TIME, 'pt-br', 'pt_BR.utf-8', 'portuguese'); //https://www.php.net/manual/pt_BR/function.setlocale.php

require_once(dirname(__FILE__) . '/Database.php');

// configurção de pastas
define('MODEL_PATH', realpath(dirname(__FILE__, 2) . '/models'));

define('DATABASE_PATH', realpath(dirname(__FILE__, 2) . '/src/config/Database.php'));