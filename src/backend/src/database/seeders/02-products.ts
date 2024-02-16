/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { QueryInterface } from 'sequelize';

const sorveteDeMoranhoImg = 'https://img.cybercook.com.br/receitas/286/sorvete-proteico-de-morango.jpeg';
const sorveteDeChocolateImg = 'https://th.bing.com/th/id/R.551feb84cd973d34e9bf850d936ed6e9?rik=rsuHan2Vr631WQ&riu=http%3a%2f%2fi-exc.ccm2.net%2fiex%2f1280%2f1016916583%2f1280939.jpg&ehk=TJl4sLCRxdcQT%2f%2fEtuKm%2faiyHJylEmFLLnHe8eiHQ3c%3d&risl=&pid=ImgRaw&r=0';
const sorveteDeOreoImg = 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-sorvete-de-oreo.jpg';
const sorveteDeMenta = 'https://www.receitas-sem-fronteiras.com/media/sorvete-de-menta_crop.jpg/rh/sorvete-de-menta.jpg';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('Products', [
            {
                id: '1',
                name: 'sorvete de morango',
                min_quantity: 1,
                current_quantity: 1,
                price: 10,
                image: sorveteDeMoranhoImg,
            },
            {
                id: '2',
                name: 'sorvete de chocolate',
                price: 10,
                min_quantity: 1,
                current_quantity: 1,
                image: sorveteDeChocolateImg,
            },
            {
                id: '3',
                name: 'sorvete de oreo',
                price: 10,
                min_quantity: 1,
                current_quantity: 1,
                image: sorveteDeOreoImg,
            },
            {
                id: '4',
                name: 'sorvete de menta',
                price: 10,
                min_quantity: 1,
                current_quantity: 1,
                image: sorveteDeMenta,
            },
        ], {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('Products', {});
    },
};
