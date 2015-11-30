var app = angular.module('myModule');

app.controller('mainController', function($scope) {

  $scope.pictures = [
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "One."
    },
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "Two."
    },
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "Three."
    },
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "Four."
    },
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "Five."
    },
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "Six."
    },
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "Seven."
    },
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "Eight."
    },
    {
      path: "http://share-fastly.picmonkey.com/prod/photo_posts/6PqaZdV1EbR_12895852.jpg/200x200",
      caption: "N
      ine."
    }
  ];
  $scope.displayCaption = function(picture) {
    alert(pic.caption);
  }

});
