export const Card = (props) => {
  const { name, image, gender, origin, status, species } = props;

  const alt = `Imagen de ${name}`;
  return (
    <div className="container-card d-flex flex-column container-flex-center-a m-2 mt-5">
      <h3 className="card-name my-2">{name}</h3>
      <img className="img-card" src={image} alt={alt} />
      <div className="container-flex-center d-flex flex-column py-4">
        <p className="especie">Especie: {species}</p>
        <p className="estado">Estado: {status}</p>
        <p className="genero">Genero: {gender}</p>
        <p className="origen">Origen: {origin.name}</p>
      </div>
    </div>
  );
};
