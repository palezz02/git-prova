import Logo from "../components/palezza/Logo"
import PalezzaButton from "../components/palezza/PalezzaButton"


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



        <p>Cantante: Giovanotti</p>
        <p>Attore: Checco Zalone</p>
        <p>Calciatore: Ronaldo</p>
        <p>Esiste un modo per unire tutti questi commit in un unico commit quando si esegue il merge su master? usiamo il git merge --squash master
          
        </p>


        <p> ho eseguito un commit ma mi sono accorto che ho sbagliato a scrivere il messaggio, come posso correggerlo? Lo faccio utilizzando git commit --amend
        </p>


        <PalezzaButton></PalezzaButton>
        <p>esiste un modo per "splittare" in 2 commit diverse la modifica di creazione del file CognomeButton.tsx e la modifica di aggiunta del componente CognomeButton al componente pageCognome? Usando git reset HEAD~</p>
    </div>
  )
}

export default pagePalezza