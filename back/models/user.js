module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        nickname:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        userId:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        gender:{
            type:DataTypes.STRING(10),
            allowNull:false,
        },
        birth:{
            type:DataTypes.STRING(12),
            allowNull:false,
        }
    },{
        charset:'utf8',
        collate:'utf8_general_ci', //한글저장하려면써줘야됨
    });

    User.associate = (db) =>{
        db.User.hasMany(db.Post, {as:'Posts'});
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through:'Like' ,as:'Liked'});
        db.User.belongsToMany(db.User, {through:'Follow' ,as: 'Followers', foreignKey:'followingId' });
        db.User.belongsToMany(db.User, {through:'Follow' ,as: 'Followings', foreignKey:'followerId' });
    };

    return User;
}