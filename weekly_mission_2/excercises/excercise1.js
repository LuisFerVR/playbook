const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   /////////////
const issue ={
    title: 'CONTRI',
    repositoryNameAssociated: 'luis',
    status: 'null',
    numberOfComments: 3,
    labels: 'etiquet',
    author: 'Luis',
    dateCreated: '15/04/22',
    lastUpdated: '15/04/22',
    getTitleAndAuthor: function (){
        return `your title is: ${this.title} was make from: ${this.author}`;
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
      }
}

    console.log("Nombre del issue:" + issue.name)
    console.log("title and author: " + issue.getTitleAndAuthor())
    console.log(issue.getGeneralInfo())



const PullRequest ={
    title: 'CONTRI',
    author: 'Fer',
    branchName: 'branch1',
    dateCreated: '15/04/22',
    status: 'done',
    repositoryNameAssociated: 'Carlo',
    getStatus: function (){
        return `status is: ${this.status}`
    },
    getTitleAndAutor: function(){
        return `title: ${this.title} author: ${this.author}`
    }
}   
    console.log("status of PullRequest:" + PullRequest.getStatus)
    console.log("title and author: " + PullRequest.getTitleAndAutor())

/* entrar a lo que vas a modelar: como una red social.
entrar a esa red y vas anotando aqui por entidades y desgranandola poco a poco
como està modelado en terminos de información */
 //INSTAGRAM
/* que veo?
perfil de usuario
    name
    user
    followings
    followerds
    num post
    bio
Fotos del usuario
    picture
    likes
    fecha de crecaion
    descripcion
    user
 Reals del usuario
    pictureR
    likes
    date_createR
    descriptionR
    user
 fotos etiquetadas
    pictureT
    likes
    date_createE
    descriptionE
    user */

    const ig_user = {
        name: "user Name",
        useername: "username",
        followers: 100,
        folllowing: 20,
        all_post: 50,
        descr: "bio"
    }

    const user_picture = {
        picture: "photo",
        likes: 1220,
        date_create: "02_04_2020" ,
        description: "in Las Vegas",
        user: "Juan_perez"
    }

    const user_reals = {
        pictureR: "history",
        likes: 10000,
        date_createR: "hace 1 h",
        descriptionR: "now",
        user: "letiRuia"
    }

    const picture_etiquete = {
        pictureT: "etiquete",
        likes: 35,
        date_createE:"20_20_22",
        descriptionE: "see you this meme",
        user: "josesito"
    }

    console.log(ig_user);
    console.log(user_picture);
    console.log(user_reals);
    console.log(picture_etiquete);
    //FACEBOOK
/* que veo?
user
    -userName
    -photo
    -portada
    -info-
    num_friens
post
    -des
    -etiquet
    -date_created
    -reactions
    -comments
    -reproduce
biography
    -desc
    -from
    -zone work
    -academic_formance.
    -emotional_situation.
*/
console.log("MODELADO DE INFORMACION PARA FACEBOOK");
console.log("MODELADO DE UN USER DE FACEBOOK extrallendo numero de amigos"); 
const user={
    userName: 'Luis',
    photo: true,
    portada: true,
    info: 'description',
    num_friens: 668,
    getNumbreFriend: function(){
        return user.num_friens;
    }
}

console.log(user.getNumbreFriend()); 
/*si no pones parentesis en tu get función al imprimir, solo te imprime la declaracion de la función, osea,
imprime el cascaron, decir qués es lo que hay ahí, más no lo que hace esa función dentro de ella*/
console.log("MODELADO DE UN POST DE FACEBOOK extrallendo numero de reacciones y comentarios"); 
const post={
    des: 'vacations in beach',
    etiquet: 'luis',
    date_created: '20_20_2022',
    reactions: 61,
    comments: 5,
    reproduce: 55,

    getNumberReactionsAndComments: function(){
        return `your number of reactions are ${this.reactions} and comments are ${this.comments}`;
    }
}

console.log(post.getNumberReactionsAndComments());
console.log("MODELADO DE LA BIOGRAFIA DE UN PERFIL DE FACEBOOK extrallendo situatuacion emocional"); 
const biography={
    desc: 'i am a very outgoing',
    from: 'Soto',
    zone_work: 'Studnet',
    academic_formance: 'Cobaeh',
    emotional_situation: 'Soltery',
    getEmotional: function(){
        return `emotional situation is: ${this.emotional_situation}`;
    }
}
console.log(biography.getEmotional());