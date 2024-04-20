import Button from "../Button";
import style from "./searchform.module.css";

export default function SearchForm () {
  return (
    <form className={style.form}>
      <input
        name="q"
        className={style.input}
        placeholder="Digite o post que está procurando."
      />
      <Button>
        Buscar
      </Button>
    </form>
  )
}