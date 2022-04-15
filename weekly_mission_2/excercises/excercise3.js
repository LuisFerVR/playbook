class Repo {
     constructor(name,author,lenguage,numberOfCommits,stars,forks,issues_open,issues_close){
         this.name=name;
         this.author=author;
         this.lenguage=lenguage;
         this.numberOfCommits=numberOfCommits;
         this.stars=stars;
         this.forks=forks;
         this.issues_open=issues_open;
         this.issues_close=issues_close;
         
     }
 }
 const fer= new Repo("Luis","LuisFer","spanish",10,0,2,0,0);
 console.log(fer);
///
 class issue {
     constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author,dateCreated,lastUpdated){
        this.title=title;
        this.repositoryNameAssociated=repositoryNameAssociated;
        this.status=status;
        this.numberOfComments=numberOfComments;
        this.labels=labels;
        this.author=author;
        this.dateCreated=dateCreated;
        this.lastUpdated=lastUpdated;
     }
    
    getTitleAndAuthor(){
        return `your title is: ${this.title} was make from: ${this.author}`;
    }

    getGeneralInfo (){
        return `This repository ${this.name} was created by ${this.author}`
      }
}

    const issue1=new issue("issue1","Carlo","Done",5,"optimizate","Luis","22_02_10","21_03_10");
    console.log(issue1);

    class PullRequest {
        constructor(title,author,branchName,dateCreated,status,repositoryNameAssociated){
            this.title=title;
            this.author=author;
            this.branchName=branchName;
            this.dateCreated=dateCreated;
            this.status=status;
            this.repositoryNameAssociated=repositoryNameAssociated;
        }
        getStatus (){
            return `status is: ${this.status}`
        }
        getTitleAndAutor (){
            return `title: ${this.title} author: ${this.author}`
        }
    }   

    const pullR= new PullRequest("myPull","Luis","myPull_2","15_04_2022","done","Carlo/PullRequest");
    console.log(pullR)