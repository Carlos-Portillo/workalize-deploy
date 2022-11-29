import classes from './NotFoundView.module.scss';

const NotFoundView = () => {
  return (
    <div className={classes["container"]}>
      <h2> Page Not Found </h2>
        <hr />
        <figure>
            <img src="https://img.freepik.com/vector-gratis/advertencia-red-internet-404-error-pagina-o-archivo-no-encontrado-pagina-web-pagina-error-internet-o-problema-no-encontrado-red-error-404-presente-hombre-durmiendo-pantalla_1150-55450.jpg?w=996&t=st=1669531851~exp=1669532451~hmac=4c58a811195c83fcb4861b8fc13365a5008e6bbfd660150efa495a9356fbef36" alt="Not found image" />
        </figure>
    </div>
  )
}

export default NotFoundView;