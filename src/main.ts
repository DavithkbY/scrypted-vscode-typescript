import { AirQuality, AirQualitySensor, NOXSensor, PM10Sensor, ScryptedDeviceBase, VOCSensor } from '@scrypted/sdk';

class TestSensor extends ScryptedDeviceBase implements VOCSensor, NOXSensor, AirQualitySensor, PM10Sensor {
    constructor(nativeId: string) {
        super(nativeId);

        this.vocDensity = 33;
        this.noxDensity = 44;
        this.airQuality = AirQuality.Excellent;
        this.pm10Density = 55;
    }
}

export default TestSensor;