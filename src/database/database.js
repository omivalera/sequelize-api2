import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'bsale_test',
    'bsale_test',
    'bsale_test',
    {
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        dialect: 'mysql',
        define: {
            timestamps: false,
            freezeTableName: true
          },
    }
);

// export const sequelize = new Sequelize(
//     'omicida',
//     'root',
//     'root',
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         define: {
//             timestamps: false,
//             freezeTableName: true
//           },
//     }
    
// );