import axios from 'axios';

export const climaCity = "OBTENGO_EL_CLIMA_DE_LA_CIUDAD";
export const deleteClimaCity = "ELIMINAR_UN_CLIMA_DE_UNA_CIUDAD";

export const getClimaCity = (city) => {
    return async function (dispatch){
        const respuesta = await axios(`https://api.openweathermap.org/data/2.5/weather?appid=c9dcb8b10b302d8909380dd50547d04a&q=${city}`)
        return dispatch({
            type:climaCity,
            payload: respuesta.data
        })
    }
}

export const deleteClima = (id, index) => {
    return function (dispatch) {
        return dispatch({
            type: deleteClimaCity,
            payload: id,
            index: index
        })
    }
}