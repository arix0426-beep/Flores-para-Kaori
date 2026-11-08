
/*
 * FLORES PARA KAORI
 * Generador del ramo de flores
 */

const SVG_NS = "http://www.w3.org/2000/svg";

// ========================================
// UTILIDAD PARA CREAR ELEMENTOS SVG
// ========================================

function createSVGElement(tag, attributes = {}) {

    const element = document.createElementNS(SVG_NS, tag);

    for (const [attribute, value] of Object.entries(attributes)) {
        element.setAttribute(attribute, value);
    }

    return element;
}

// ========================================
// CONFIGURACIÓN DE LAS FLORES
// ========================================

const bouquetFlowers = [
    { x: 155, y: 115, color: "#9b70d1", size: 1.0 },
    { x: 245, y: 75, color: "#c49be9", size: 1.1 },
    { x: 350, y: 100, color: "#a77bda", size: 1.15 },
    { x: 455, y: 75, color: "#d2b1f0", size: 1.05 },
    { x: 545, y: 120, color: "#9364c9", size: 1.0 },
    { x: 285, y: 165, color: "#b58cdd", size: 0.9 },
    { x: 415, y: 165, color: "#c49be9", size: 0.95 }
];

// ========================================
// CREAR TALLO
// ========================================


function createStem(svg, flower, index) {

    const { x, y } = flower;

    const stem = createSVGElement("path", {
        d: `M ${x} ${y + 12} Q ${x + 15} 245 350 315`,
        fill: "none",
        stroke: "#658d69",
        "stroke-width": "5",
        "stroke-linecap": "round",
        class: "bouquet-stem"
    });

    stem.style.animationDelay = `${1.8 + index * 0.12}s`;

    svg.appendChild(stem);

    const leaf = createSVGElement("path", {
        d: `M ${x + 5} 235 Q ${x + 45} 205 ${x + 48} 240 Q ${x + 28} 260 ${x + 5} 235`,
        fill: "#719b78",
        stroke: "#a4c4a0",
        "stroke-width": "1.5",
        class: "bouquet-leaf"
    });

    leaf.style.animationDelay = `${2.5 + index * 0.12}s`;

    svg.appendChild(leaf);
}


// ========================================
// CREAR UNA FLOR
// ========================================


function createFlower(svg, flower, index) {

    const { x, y, color, size } = flower;

    // Este grupo conserva la posición y el tamaño de la flor.
    const flowerPosition = createSVGElement("g", {
        transform: `translate(${x} ${y}) scale(${size})`
    });

    // Este grupo interior se encarga exclusivamente de la animación.
    const flowerAnimation = createSVGElement("g", {
        class: "bouquet-flower"
    });

    flowerAnimation.style.animationDelay =
        `${3 + index * 0.22}s`;

    // Ocho pétalos.
    for (let i = 0; i < 8; i++) {

        const angle = i * 45;

        const petal = createSVGElement("ellipse", {
            cx: "0",
            cy: "-23",
            rx: "15",
            ry: "27",
            fill: color,
            stroke: "#e4ccff",
            "stroke-width": "1.2",
            transform: `rotate(${angle})`,
            class: "bouquet-petal"
        });

        petal.style.animationDelay =
            `${3 + index * 0.22 + i * 0.09}s`;
 
        flowerAnimation.appendChild(petal);
    }

    // Centro de la flor.
    const center = createSVGElement("circle", {
        cx: "0",
        cy: "0",
        r: "12",
        fill: "#f3d68b",
        class: "bouquet-center"
    });

    center.style.animationDelay = `${4.1 + index * 0.22}s`;

    flowerAnimation.appendChild(center);

    // Brillo central.
    const shine = createSVGElement("circle", {
        cx: "-4",
        cy: "-4",
        r: "3",
        fill: "#fff1bd",
        opacity: "0.8",
        class: "bouquet-shine"
    });

    shine.style.animationDelay = `${4.3 + index * 0.22}s`;

    flowerAnimation.appendChild(shine);

    flowerPosition.appendChild(flowerAnimation);
    svg.appendChild(flowerPosition);
}


// ========================================
// GENERAR EL RAMO
// ========================================


function generateBouquet() {

    const garden = document.getElementById("flower-garden");

    if (!garden || garden.dataset.generated === "true") {
        return;
    }

    const svg = createSVGElement("svg", {
        viewBox: "0 0 700 390",
        role: "img",
        "aria-label": "Un ramo de siete flores moradas"
    });

    svg.classList.add("bouquet-svg");

    // Dibujar los tallos detrás de las flores.
    bouquetFlowers.forEach((flower, index) => {
        createStem(svg, flower, index);
    });

    // Envoltura del ramo.
    const wrapping = createSVGElement("path", {
        d: "M 230 215 Q 350 250 470 215 L 405 355 Q 350 380 295 355 Z",
        fill: "#c6a5df",
        opacity: "0.82",
        stroke: "#e4ccff",
        "stroke-width": "3",
        "stroke-linejoin": "round",
        class: "bouquet-wrapping"
    });

    wrapping.style.animationDelay = "0.2s";

    svg.appendChild(wrapping);

    // Detalle frontal de la envoltura.
    const wrappingDetail = createSVGElement("path", {
        d: "M 255 240 Q 350 275 445 240 L 400 345 Q 350 360 300 345 Z",
        fill: "#e1c9f3",
        opacity: "0.65",
        stroke: "#f0e3ff",
        "stroke-width": "2",
        "stroke-linejoin": "round",
        class: "bouquet-wrapping-detail"
    });

    wrappingDetail.style.animationDelay = "0.7s";

    svg.appendChild(wrappingDetail);

    // Lazo del ramo.
    const ribbonLeft = createSVGElement("path", {
        d: "M 350 290 Q 295 270 300 320 L 350 310 Z",
        fill: "#a77bda",
        class: "bouquet-ribbon"
    });

    const ribbonRight = createSVGElement("path", {
        d: "M 350 290 Q 405 270 400 320 L 350 310 Z",
        fill: "#a77bda",
        class: "bouquet-ribbon"
    });

    const ribbonCenter = createSVGElement("circle", {
        cx: "350",
        cy: "297",
        r: "12",
        fill: "#8b5fbd",
        class: "bouquet-ribbon"
    });

    ribbonLeft.style.animationDelay = "1.3s";
    ribbonRight.style.animationDelay = "1.45s";
    ribbonCenter.style.animationDelay = "1.6s";

    svg.append(ribbonLeft, ribbonRight, ribbonCenter);

    // Dibujar las flores al frente.
    bouquetFlowers.forEach((flower, index) => {
        createFlower(svg, flower, index);
    });

    // Crear la capa de luciérnagas.
    const fireflyLayer = document.createElement("div");
    fireflyLayer.classList.add("firefly-layer");

    const fireflyPositions = [
        { x: "8%", y: "20%", duration: "5s", delay: "0s" },
        { x: "18%", y: "65%", duration: "6s", delay: "1s" },
        { x: "28%", y: "12%", duration: "4.5s", delay: "2s" },
        { x: "73%", y: "15%", duration: "5.5s", delay: "0.5s" },
        { x: "88%", y: "35%", duration: "6.5s", delay: "1.5s" },
        { x: "93%", y: "75%", duration: "5s", delay: "2.5s" },
        { x: "12%", y: "85%", duration: "7s", delay: "3s" },
        { x: "80%", y: "88%", duration: "4.8s", delay: "0.8s" },
        { x: "42%", y: "8%", duration: "6s", delay: "1.8s" },
        { x: "60%", y: "90%", duration: "5.2s", delay: "2.2s" }
    ];

    fireflyPositions.forEach(position => {
        const firefly = document.createElement("span");

        firefly.classList.add("firefly-particle");

        firefly.style.left = position.x;
        firefly.style.top = position.y;
        firefly.style.animationDuration = position.duration;
        firefly.style.animationDelay = position.delay;

        fireflyLayer.appendChild(firefly);
    });

    garden.replaceChildren(fireflyLayer, svg);
    garden.dataset.generated = "true";

}


