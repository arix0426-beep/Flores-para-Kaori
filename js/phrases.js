
/*
 * FLORES PARA KAORI
 * Banco y administrador de frases
 */

// ========================================
// BANCO DE FRASES
// ========================================

const PHRASES = [

    // Grupo 1
    "Hay personas que hacen más bonito cualquier día.",
    "Qué bonito es coincidir contigo.",
    "Algunas sonrisas se quedan en la memoria.",
    "Tu presencia tiene algo especial.",
    "Hay momentos pequeños que se vuelven inolvidables.",
    "El mundo tiene formas curiosas de regalar cosas bonitas.",
    "Me gusta saber que existes.",
    "A veces, una persona puede cambiar el color de un día.",
    "Qué suerte la de quienes pueden conocerte.",
    "Hay cosas que simplemente no necesitan explicación.",

    // Grupo 2
    "Si los momentos bonitos fueran flores, ya tendrías un jardín entero.",
    "Tu nombre tiene un lugar especial en mis pensamientos.",
    "Hay coincidencias que parecen pequeños regalos.",
    "Me encanta encontrar motivos para sonreír contigo.",
    "No todos los días tienen algo extraordinario, pero tú haces que algunos sí.",
    "Ojalá nunca te falten razones para sonreír.",
    "Eres una de esas casualidades que agradezco.",
    "Hay recuerdos que merecen quedarse para siempre.",
    "Incluso los días nublados tienen algo de luz.",
    "Qué bonito es poder dedicarte algo así.",

    // Grupo 3
    "Si pudiera guardar un instante bonito, elegiría uno contigo.",
    "Hay personas que se vuelven parte de nuestros días favoritos.",
    "Tu felicidad también es una de las cosas que deseo.",
    "No hacen falta grandes ocasiones para recordarte lo especial que eres.",
    "Me gusta la tranquilidad que transmiten algunos momentos contigo.",
    "Cada flor de este jardín tiene un pequeño mensaje para ti.",
    "Hay detalles que dicen mucho sin necesidad de hablar.",
    "Qué bonito es tener a alguien en quien pensar con cariño.",
    "Ojalá la vida te sorprenda con cosas tan bonitas como tú.",
    "Algunas personas hacen que el tiempo se sienta diferente.",

    // Grupo 4
    "Tu existencia es una bonita casualidad en mi historia.",
    "No hay dos flores iguales, y eso las hace especiales.",
    "Me gustaría que pudieras verte con los ojos con los que te admiro.",
    "Hay sonrisas que merecen todos los jardines del mundo.",
    "Un pequeño detalle también puede guardar un sentimiento enorme.",
    "Qué bonito sería que todos tus días tuvieran un poquito de magia.",
    "A veces, pensar en ti es suficiente para mejorar mi día.",
    "No necesito una fecha especial para desearte algo bonito.",
    "Este jardín es pequeño, pero el cariño detrás de él no lo es.",
    "Cada pétalo es una forma distinta de decirte que eres especial.",

    // Grupo 5
    "Me alegra que nuestros caminos se hayan encontrado.",
    "Hay personas que llegan y hacen que todo se sienta un poquito mejor.",
    "Quisiera regalarte todas las flores que existen.",
    "Tu manera de ser tiene una belleza propia.",
    "Los mejores detalles suelen nacer de pensamientos sinceros.",
    "Qué bonito es encontrar belleza en las cosas sencillas.",
    "Si este jardín pudiera hablar, tendría muchas cosas que decirte.",
    "Espero que hoy encuentres algo que te haga muy feliz.",
    "Hay sentimientos que crecen como flores: poco a poco y con cariño.",
    "Me gusta que seas parte de mi mundo.",

    // Grupo 6
    "No todas las maravillas están lejos; algunas están frente a nosotros.",
    "Un día cualquiera puede convertirse en uno especial por una persona.",
    "Ojalá siempre tengas motivos para sentirte orgullosa de ti.",
    "Este pequeño jardín lleva un pensamiento bonito en cada flor.",
    "Hay nombres que se leen y automáticamente provocan una sonrisa.",
    "Qué bonito es dedicar tiempo a alguien que lo merece.",
    "Si la alegría tuviera forma, seguramente tendría muchos pétalos.",
    "Me gusta imaginar que estas flores consiguieron sacarte una sonrisa.",
    "No hay prisa cuando se trata de disfrutar algo bonito.",
    "Hay personas que hacen florecer hasta los días más simples.",

    // Grupo 7
    "Quisiera que nunca olvidaras lo valiosa que eres.",
    "La vida tiene detalles preciosos, y conocerte es uno de ellos.",
    "Cada flor de este lugar tiene algo de mi cariño.",
    "Me encanta que existan recuerdos que todavía nos hacen sonreír.",
    "No hay jardín demasiado grande para tantos buenos deseos.",
    "Que nunca te falten sueños que te emocionen.",
    "Tu forma de ser hace que seas alguien difícil de olvidar.",
    "Hay pequeños universos escondidos en cada persona.",
    "Este rincón existe para recordarte lo mucho que te aprecio.",
    "A veces, las palabras son flores que no necesitan agua.",

    // Grupo 8
    "Si pudiera pintar un día bonito, tendría tus colores favoritos.",
    "Qué suerte poder compartir aunque sea un pedacito de tiempo contigo.",
    "Espero que la vida te trate con toda la ternura que mereces.",
    "Las cosas más bonitas no siempre se pueden explicar.",
    "Me gusta pensar que este detalle te encontrará en un buen momento.",
    "Hasta una flor pequeña puede llenar de color un lugar.",
    "Ojalá todos tus sueños encuentren la manera de florecer.",
    "Hay personas que merecen más de una sola flor.",
    "Tu alegría es algo que siempre merece celebrarse.",
    "Qué bonito es que seas tú, simplemente tú.",

    // Grupo 9
    "No existe una medida exacta para el cariño.",
    "Si cada pensamiento bonito fuera una flor, esto sería apenas el comienzo.",
    "Me gusta la idea de crear algo que te haga sonreír.",
    "Que cada nuevo día te regale una razón para ilusionarte.",
    "Hay detalles que se preparan con mucho más que tiempo.",
    "No importa cuántas flores haya, ninguna se parece a ti.",
    "A veces, lo más bonito es tener a alguien con quien compartirlo.",
    "Este jardín tiene una visitante muy especial.",
    "Quisiera que estas flores te acompañaran un ratito.",
    "Nunca subestimes lo bonito que puede ser un pequeño gesto.",

    // Grupo 10
    "Hay momentos que quisiera guardar entre las páginas de un libro.",
    "Tu existencia hace que algunas historias sean más bonitas.",
    "Si la ternura fuera un jardín, tendría tu nombre.",
    "Ojalá encuentres magia incluso en los días normales.",
    "Me gusta que haya cosas que me recuerden a ti.",
    "Cada flor representa un pensamiento que quería compartir contigo.",
    "No todos los regalos caben en una caja.",
    "A veces, una página puede convertirse en un pequeño mundo.",
    "Que nunca pierdas esa chispa que te hace ser tú.",
    "Hay cariño en cada detalle que se prepara pensando en alguien.",

    // Grupo 11
    "Me gustaría que este momento se quedara contigo como un recuerdo bonito.",
    "Hay personas que hacen que valga la pena detenerse un instante.",
    "No necesitas hacer nada extraordinario para ser especial.",
    "Si pudiera regalarte un deseo, sería que siempre encuentres felicidad.",
    "Qué bonito es poder decirte, de alguna manera, que te quiero.",
    "Las flores duran un tiempo, pero algunos recuerdos permanecen.",
    "Ojalá este jardín te recuerde que alguien piensa en ti con cariño.",
    "No hay distancia que impida enviar un pensamiento bonito.",
    "Cada detalle tiene una historia, y este tiene tu nombre.",
    "Me alegra que seas parte de mis días.",

    // Grupo 12
    "El cariño también puede expresarse con pétalos y palabras.",
    "Quisiera que este pequeño universo te hiciera sentir especial.",
    "Hay cosas que florecen simplemente porque encuentran un buen lugar.",
    "Que la vida te regale momentos que quieras repetir.",
    "Si pudiera elegir un color para este sentimiento, sería el morado.",
    "No hay suficientes palabras para todos los buenos deseos que tengo para ti.",
    "Este jardín seguirá teniendo flores, igual que mis pensamientos bonitos hacia ti.",
    "Me gusta pensar que cada pétalo lleva un poquito de alegría.",
    "Gracias por ser una persona tan especial en mi vida.",
    "Y entre tantas flores, mi pensamiento siempre termina encontrándote."

];

// ========================================
// FRASE ESPECIAL
// ========================================

const SPECIAL_PHRASE =
    "Parecen infinitas, ¿cierto? Pues así de infinito es mi amor";

// ========================================
// FUNCIONES AUXILIARES
// ========================================

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function randomBatchSize() {
    return Math.floor(Math.random() * 3) + 5;
}

// ========================================
// ADMINISTRADOR DE FRASES
// ========================================

const PhraseManager = (() => {

    let phraseDeck = [];
    let moreClicks = 0;
    let initialBatchGenerated = false;
    let specialPhraseShown = false;

    function refillDeck() {
        phraseDeck = shuffleArray(PHRASES);
    }

    function drawNormalPhrases(amount) {
        const selected = [];
        const selectedSet = new Set();

        while (selected.length < amount) {

            if (phraseDeck.length === 0) {
                refillDeck();
            }

            const phrase = phraseDeck.pop();

            // Evitar repeticiones dentro del mismo grupo.
            if (!selectedSet.has(phrase)) {
                selected.push(phrase);
                selectedSet.add(phrase);
            }
        }

        return selected;
    }

    function getInitialBatch() {

        if (initialBatchGenerated) {
            return [];
        }

        initialBatchGenerated = true;

        const amount = randomBatchSize();

        return drawNormalPhrases(amount);
    }

    function getNextBatch() {

        moreClicks++;

        const amount = randomBatchSize();

        // Quinta pulsación: incluir la frase especial.
        if (moreClicks === 5 && !specialPhraseShown) {

            specialPhraseShown = true;

            const normalPhrases =
                drawNormalPhrases(amount - 1);

            normalPhrases.push(SPECIAL_PHRASE);

            return shuffleArray(normalPhrases);
        }

        return drawNormalPhrases(amount);
    }

    return {
        getInitialBatch,
        getNextBatch
    };

})();

