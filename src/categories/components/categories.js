import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';

const mensajeErrorBusqueda = "Ningún elemento coincide con tu búsqueda";

function Categories(props) {  

  let searchId = []
  if (props.search){
    props.search.map(searchElement => searchId.push(
      searchElement.get('id')
    ));
  }

  return (
    <div className="Categories">
      <Search />
      {
        props.isLoading &&
        <p>Buscando tus videos favoritos...</p>
      }
      {/* {
        props.search.map((item) => {
          return <Media 
            openModal={props.handleOpenModal}
            {...item.toJS()}
            key={item.get('id')}
          />
        })
      } */}
      {
        searchId.length > 0 && 
        <Category
          key='Busqueda'
          description='Resultado(s) de la búsqueda'
          title={
            searchId.length > 1 ?
            `${searchId.length} Coincidencias` :
            `${searchId.length} Coincidencia`
            }
          handleOpenModal={props.handleOpenModal}
          playlist={searchId}
        />
      }
      { 
        props.search && 
        searchId.length == 0 && 
        <p>{mensajeErrorBusqueda}</p>
      }
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
