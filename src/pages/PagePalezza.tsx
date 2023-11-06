import Logo from "../components/palezza/Logo"


const pagePalezza = () => {
  return (
    <div>
        <p>Nome: Gabriele</p>
        <p>Cognome: Palezza</p>
        <Logo></Logo>
        <p>Per la soluzione dell' esercizio 3 ho creato una nuova branch e ho copiato le modifiche fatte per poi resettare la master</p>


        <p> la mia branch dedicata è indietro di qualche commit rispetto a master, come faccio a portarla avanti? Cioè, come faccio a portare le modifiche fatte su master sulla mia branch dedicata?
          usando il git pull sulla master e poi il merge
        </p>

        <p>Ci ritoviamo con molti commit, come si può fare per unirli in un unico commit? 
          Uso il  git rebase -i HEAD~4 con il 4 che specifica le commit da unire
        </p>

        <p>Antipasto: Zeppoline</p>
        <p>Primo: Spaghetti ai frutti di mare</p>
        <p>Secondo: Fritto misto</p>
        <p>Dolce: Delizia al limone</p>
    </div>
  )
}

export default pagePalezza