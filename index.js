//var firstMethod = function() {
//   var promise = new Promise(function(resolve, reject){
//      setTimeout(function() {
//         console.log('first method completed');
//         resolve({data: '123'});
//      }, 2000);
//   });
//   return promise;
//};
// 
// 
//var secondMethod = function(someStuff) {
//   var promise = new Promise(function(resolve, reject){
//      setTimeout(function() {
//         console.log('second method completed');
//         resolve({newData: someStuff.data + ' some more data'});
//      }, 2000);
//   });
//   return promise;
//};
// 
//var thirdMethod = function(someStuff) {
//   var promise = new Promise(function(resolve, reject){
//      setTimeout(function() {
//         console.log('third method completed');
//         resolve({result: someStuff.newData});
//      }, 3000);
//   });
//   return promise;
//};
// 
//firstMethod()
//   .then(secondMethod)
//   .then(thirdMethod);


function fetchReposFromOrganization (url){
	return new Promise(function (resolve, reject) {
var myRequest = new XMLHttpRequest();
myRequest.onload = function(){
	var obj = JSON.parse(myRequest.responseText);
	resolve(obj);}

    myRequest.open(
      'GET',
      url
    );
    myRequest.send();
//	reject(alert('Something went bad'));	
	})};

function renderListOfRepositories (obj){
	return new Promise(function (resolve, reject) {
	 var myListElement = document.getElementById('repos');
     var repoIdArr=[];
	 var urlArr=[];
		for(var k in obj){

      var repo =  obj[k];
      var repoId = 'repo-'+k;
      myListElement.innerHTML += [
        '<li id="', repoId ,'">',
        '<a href="',
        repo.url,
        '" >',
        repo.name,
        '</a></li>'
      ].join('');
		 repoIdArr.push(repoId);
		 urlArr.push(repo.contributors_url);
		 
	 };
		resolve([urlArr, repoIdArr]);
	})};

function fetchContributors ( [url, repoId] ){
			
		return new Promise(function (resolve, reject) {
		var myContributorsList=[];
			for (var n in url){	
    var getContributorsRequest = new XMLHttpRequest();
    
    
getContributorsRequest.onload = function(){
	 myContributorsList[n] = JSON.parse(getContributorsRequest.responseText);
		} ;
    getContributorsRequest.open('GET',url[n],false);
    getContributorsRequest.send();
    };
			resolve([myContributorsList,repoId]);})
  };

function renderContributors ([myContributorsList,repoId]){
	for (var m in repoId){
	var repoListItem = document.getElementById(repoId[m])
      var listOfContributors = '';
		
      for(var k in myContributorsList[m]){
        var contributor = myContributorsList[m][k];

        listOfContributors += [
          '<li>',
          '<img src="',
          contributor.avatar_url,
          '" />',
          '</li>'
        ].join('');
}

      repoListItem.innerHTML += '<h2>Contributors</h2><ul class="contributor-list">' + listOfContributors + '</ul>';
    };}

fetchReposFromOrganization('https://api.github.com/orgs/hackyourfuture/repos').then(renderListOfRepositories).then(fetchContributors).then(renderContributors);


























