var Octokit = require("@octokit/rest");

var octokit = new Octokit();

var repos = Promise.resolve(octokit.repos.listForUser({
  username: 'germauricio'
}));

repos.then(function(listOfRepos) {
	var names = listOfRepos.data
	for(var i=0; i< names.length; i++){
		console.log(names[i].name);
	}
});
