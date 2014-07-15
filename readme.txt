Create a separate branch based on the $ branch and push all your codes to that branch.
Let the master repo contain the most uptodate working codes.
The changes can be verified in those branches and the branches can be deleted later.

* When you first start working on the project, you'll want to make a local copy of the repository to keep track of your changes:
      git clone https://github.com/yuvarajbu/bblspace.git

* Before you begin working, you should create a feature branch based on the development branch:
      git checkout -b somefeature origin / development

* Once you have some code written and want to save your work to the repo, tell git which files you would like to commit to the repo and commit them:
      git add file1 file2 ...
      git commit -m " commit message here "

* To get the latest code that other team members have shared on the github repo:
      git fetch origin
      git pull

* After you have one or more commits in your local repo, you'll want to share them with the rest of the team:
      git push -u origin somebranch

Further reading: http://git-scm.com/book
