<?php

use Flarum\Database\Migration;

return Migration::addColumns('ziven_transfer_money', [
    'notes' => ['string', 'length' => 255, 'nullable' => true],
]);
