var Octokit = require("@octokit/rest");

var octokit = new Octokit();

var author = 'matiasimartin'

var repos = Promise.resolve(octokit.repos.listForUser({
  username: author
}));



repos.then(function(listOfRepos) {
	var names = listOfRepos.data;

	console.log("Lista de repos de "+ author +":\n")
	for(var i=0; i < names.length ; i++){
		
		console.log(names[i].name + "\n")
	
		var userCommits = Promise.resolve(octokit.repos.listCommits({
			owner: author,
			repo: names[i].name,
		}));

		userCommits.then(function(listOfCommits){
			var commit = listOfCommits.data;

			for(var j=0; j < commit.length; j++){
				console.log("Commit n°" + j + " :")
				console.log(commit[j].commit.message)
		}
		});
	}
	
});




