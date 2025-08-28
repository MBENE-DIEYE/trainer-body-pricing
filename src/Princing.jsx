/*    STRUCTURA GENERALE DELLA SECTIONE PRINCING
- Titolo : Tariffe & Abbonamenti
-una breve descrizione: "Il tuo corpo, i tuoi obiettivi, il nostro supporto"
-3 o 4 piani tariffari chiari ad esempio : gratuito , standard, premium
-le fonctionalità incluse per ogni piano
-un pulsante CTA : scriviti o inizia ora
-informazioni rasicurante: ganranzia ,supporto, cancellazione facile

---------------------------------------------------
1-piano gratuito "scoperto"
Obiettivo: permette ai nuovi utenti di scoprire Trainer Boddy senza alcun costa
Prezzo: 0€ / mese
-Funzionalità incluse
Funzionalità:	                                                 -Spiegazione:
3 programmi di allenamento	                   L’utente può provare fino a 3 programmi
                                                  diversi (ad esempio: bodybuilding, dimagrimento, yoga).


Monitoraggio di base	                       Un pannello semplice che mostra l’evoluzione settimanale: 
                                               calorie bruciate,allenamenti completati, peso corporeo.

1 coach al mese                             	Accesso a una sola sessione di chat con un coach sportivo al mese. 
                                                Perfetto per ricevere un primo consiglio.

Pubblicità inclusa	                            Poiché il piano è gratuito, verranno mostrate inserzioni pubblicitarie nell’



2. Piano Standard — "Avanzato" 

Obiettivo: Offrire un servizio completo a chi desidera ottenere risultati più velocemente.
Prezzo: 19,99€ / mese

Funzionalità incluse
Funzionalità:                                                 -Spiegazione:
Accesso illimitato ai programmi	                    Nessun limite: l’utente può seguire tutti i programmi 
                                                    disponibili senza restrizioni.

Monitoraggio personalizzato                       	L’app si adatta: gli allenamenti vengono automaticamente modificati 
                                                    in base ai    risultati, agli obiettivi e al livello dell’utente.

3 coach illimitati                              	Possibilità di fare domande illimitate a fino a 3 coach 
                                                    diversi tramite chat integrata.

Consigli nutrizionali                            	Accesso a una libreria di ricette equilibrate, piani alimentari
                                                    personalizzati e suggerimenti dietetici.

Senza pubblicità	                                Esperienza 100% fluida e senza distrazioni.




3. Piano Premium — "Elite" 

Obiettivo: Offrire un’esperienza VIP con un supporto completo.
Prezzo: 39,99€ / mese

Funzionalità incluse
Funzionalità:                                                    	Spiegazione:
Tutte le funzionalità del piano Standard	               L’utente ottiene tutti i vantaggi del piano Standard.

Coaching video settimanale 🎥	                            Una volta a settimana, una videochiamata in diretta
                                                           con un coach certificato per correggere le posture, dare consigli e motivare.

Piano nutrizionale personalizzato 🥗	                  Un piano alimentare completo, creato su misura da
                                                           un nutrizionista e aggiornato ogni mese.

Assistenza prioritaria                                  	Risposte più rapide dal servizio clienti e 
                                                            accesso prioritario ai coach.

Eventi esclusivi 🎟	                                        Inviti a webinar, sfide sportive
                                                            e sessioni di gruppo riservate agli utenti Premium.
*/

const Princing = () => {
    return (
        <div>
            <div>
                <section id="princing" className="bg-primary-color  h-screen ">
                    <h2 className="text-text-color text-center font-text text-2xl">Tariffe & Abbonamento</h2>
                    <section class="bg-gray-50 py-16">
                        <div class="max-w-6xl mx-auto text-center">
                            <h2 class="text-4xl font-bold text-gray-800">Choisissez votre plan</h2>
                            <p class="mt-4 text-lg text-gray-600">
                                Avec Trainer Buddy, trouvez le programme d’entraînement qui correspond à vos objectifs.
                            </p>
                        </div>

                        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* <!-- Plan Gratuit --> */}
                            <div class="bg-white shadow-lg rounded-2xl p-6 text-center">
                                <h3 class="text-2xl font-semibold text-gray-800">Gratuit</h3>
                                <p class="mt-2 text-gray-600 text-lg">0€ / mois</p>
                                <ul class="mt-6 space-y-3 text-gray-700">
                                    <li>✔ 3 programmes d’entraînement</li>
                                    <li>✔ Suivi basique</li>
                                    <li>✔ 1 coach / mois</li>
                                    <li>✖ Publicités incluses</li>
                                </ul>
                                <button class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                                    Commencer gratuitement
                                </button>
                            </div>

                            {/* <!-- Plan Standard --> */}
                            <div class="bg-blue-600 text-white shadow-xl rounded-2xl p-6 text-center transform scale-105">
                                <h3 class="text-2xl font-semibold">Standard</h3>
                                <p class="mt-2 text-lg">19,99€ / mois</p>
                                <ul class="mt-6 space-y-3">
                                    <li>✔ Accès illimité</li>
                                    <li>✔ Suivi personnalisé</li>
                                    <li>✔ 3 coachs illimités</li>
                                    <li>✔ Conseils nutrition</li>
                                    <li>✔ Sans publicité</li>
                                </ul>
                                <button class="mt-6 px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-gray-200 transition">
                                    S’abonner maintenant
                                </button>
                            </div>

                            {/* <!-- Plan Premium --> */}
                            <div class="bg-white shadow-lg rounded-2xl p-6 text-center">
                                <h3 class="text-2xl font-semibold text-gray-800">Premium</h3>
                                <p class="mt-2 text-gray-600 text-lg">39,99€ / mois</p>
                                <ul class="mt-6 space-y-3 text-gray-700">
                                    <li>✔ Coaching vidéo hebdo</li>
                                    <li>✔ Plan nutrition personnalisé</li>
                                    <li>✔ Support prioritaire</li>
                                    <li>✔ Événements exclusifs</li>
                                </ul>
                                <button class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                                    Passer au Premium
                                </button>
                            </div>
                        </div>

                        <p class="text-center mt-8 text-gray-500">
                            Annulez à tout moment. Sans engagement.
                        </p>
                    </section>

                </section>
            </div>
        </div>
    )
}

export default Princing