define('main', ['jquery', 'lodash'], function($, _){
  console.log('Loaded main script');
  console.log('jQuery:' , $.fn.jquery);
  console.log('lodash:' , _.VERSION);
});