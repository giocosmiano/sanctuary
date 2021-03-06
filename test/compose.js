'use strict';

const S = require ('..');

const eq = require ('./internal/eq');


test ('compose', () => {

  eq (typeof S.compose) ('function');
  eq (S.compose.length) (1);
  eq (S.show (S.compose)) ('compose :: Semigroupoid s => s b c -> s a b -> s a c');

  eq (S.compose (S.mult (2)) (S.add (1)) (20)) (42);

});
