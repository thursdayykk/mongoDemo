var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/test";

/**
 * 插入
 * db.collection("集合名").insertOne    插入一条
 * */
function insert(collection,obj,callback){
    mongo.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true},(err,db)=>{
        if(err == null){
            // 连接成功
            var database = db.db("test"); //use
            /**
             * 创建集合
             *  database.createCollection("teacher",(err,res)=>{
            if(err == null){
                console.log("成功！")
                console.log(res)
                db.close()
            }else{
                console.log(err)
            }
        })
             * */
            database.collection(collection).insertOne(obj,callback)
            db.close();
        }else{
            console.log(err)
        }
    })
}

/**
 * 插入
 * db.collection("集合名").insertMany   批量插入
 * */
function insertMany(collection,objs,callback){
    mongo.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true},(err,db)=>{
        if(err == null){
            // 连接成功
            var database = db.db("test"); //use
            database.collection(collection).insertMany(objs,callback)
            db.close();
        }else{
            console.log(err)
        }
    })
}

/**
 * 查询
 * */
function find(collection,where,callback){
    mongo.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true},(err,db)=>{
        if(err == null){
            // 连接成功
            var database = db.db("test"); //use
            database.collection(collection).find(where).toArray(callback)
            db.close();
        }else{
            console.log(err)
        }
    })
}
/**
 * 单个修改
 * */
function update(collection,where,update,callback){
    mongo.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true},(err,db)=>{
        if(err == null){
            // 连接成功
            var database = db.db("test"); //use
            database.collection(collection).updateOne(where,update,callback)
            db.close();
        }else{
            console.log(err)
        }
    })
}

/**
 * 删除
 * */
function deleteOne(collection,where,callback){
    mongo.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true},(err,db)=>{
        if(err == null){
            // 连接成功
            var database = db.db("test"); //use
            database.collection(collection).deleteOne(where,callback)
            db.close();
        }else{
            console.log(err)
        }
    })
}
// find("student",{age:18},(err,res)=>{
//     if(!err){
//         console.log(res)
//     }else{
//         console.log(err)
//     }
// })

// update("student",{name:"小王"},{$set:{age:100}},(err,res)=>{
//     if(!err){
//         console.log(res)
//     }else{
//         console.log(err)
//     }
// })
deleteOne("student",{name:"dog"},(err,res)=>{
    if(!err){
        console.log(res)
    }else{
        consol.log(err)
    }
})
module.exports.insert = insert;
module.exports.insertMany = insertMany;
module.exports.find = find;
module.exports.update = update;
module.exports.deleteOne = deleteOne;