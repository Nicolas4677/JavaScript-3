// Copyright (C) 2020 Alejandro Güereca, All Rights Reserved

'use strict'

const TYPES = {
    ATTACK: 'ATTACK',
    SONAR: 'SONAR',
    SUBMARINE: 'SUBMARINE',
    RADIOACTIVE: 'RADIOACTIVE'
}

const CIRCUITS = {
    GREY: 'GREY',
    YELLOW: 'YELLOW',
    ORANGE: 'ORANGE'
}

class ButtonType {
    constructor(type, circuit = 'INVALID') {
        this.type = TYPES[type];
        this.circuit = CIRCUITS[circuit];
        this.isActive = false;
    }
}

const { ATTACK, SONAR, SUBMARINE, RADIOACTIVE } = TYPES;
const { GREY, YELLOW, ORANGE } = TYPES;

export default class EngineerControls {
    constructor() {
        this.west = [
            new ButtonType(ATTACK, YELLOW),
            new ButtonType(SUBMARINE, YELLOW),
            new ButtonType(SONAR, YELLOW),
            new ButtonType(SONAR),
            new ButtonType(RADIOACTIVE),
            new ButtonType(RADIOACTIVE)
        ];
        this.north = [
            new ButtonType(SUBMARINE, ORANGE),
            new ButtonType(ATTACK, ORANGE),
            new ButtonType(SUBMARINE, ORANGE),
            new ButtonType(SONAR),
            new ButtonType(ATTACK),
            new ButtonType(RADIOACTIVE)
        ];
        this.south = [
            new ButtonType(SONAR, GREY),
            new ButtonType(SUBMARINE, GREY),
            new ButtonType(ATTACK, GREY),
            new ButtonType(ATTACK),
            new ButtonType(RADIOACTIVE),
            new ButtonType(SUBMARINE)
        ];
        this.east = [
            new ButtonType(SONAR, ORANGE),
            new ButtonType(SUBMARINE, GREY),
            new ButtonType(ATTACK, YELLOW),
            new ButtonType(RADIOACTIVE),
            new ButtonType(SONAR),
            new ButtonType(RADIOACTIVE)
        ];
    }

    getActiveByCircuit(circuit = "") {
        console.log(CIRCUITS[circuit]);
        
        return [
            ...this.west.filter(button => CIRCUITS[circuit] && button.circuit === CIRCUITS[circuit] && button.isActive),
            ...this.north.filter(button => CIRCUITS[circuit] && button.circuit === CIRCUITS[circuit] && button.isActive),
            ...this.south.filter(button => CIRCUITS[circuit] && button.circuit === CIRCUITS[circuit] && button.isActive),
            ...this.east.filter(button => CIRCUITS[circuit] && button.circuit === CIRCUITS[circuit] && button.isActive)
        ];
    }

    resetCircuit(circuit) {
        for (const orientation of Object.keys(this)) {
            for (const button of this[orientation]) {
                if (button.circuit === CIRCUITS[circuit]) {
                    button.isActive = false;
                }
            }
        }
    }

    checkForRadioactiveHit() {
        const pressed = [];

        for (const orientation of Object.keys(this)) {
            for (const button of this[orientation]) {
                if (button.type === TYPES.RADIOACTIVE && !button.isActive) {
                    return false;
                } else {
                    pressed.push(button);
                }
            }
        }

        for (const button of pressed) {
            button.isActive = false;
        }

        return true;
    }
}
