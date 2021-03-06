/**
 * set of topics that has to be subscribed for the pv-charging settings
 *
 * @author Kevin Wieland
 * @author Michael Ortenstein
 */

// line[0] = topic
// line[1] = load counter (if needed)

var topicsToSubscribe = [
	["openWB/config/get/SmartHome/Devices/1/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/2/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/3/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/4/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/5/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/6/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/7/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/8/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/9/device_configured", 0],
	["openWB/config/get/SmartHome/Devices/1/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/2/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/3/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/4/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/5/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/6/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/7/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/8/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/9/device_canSwitch", 0],
	["openWB/config/get/SmartHome/Devices/1/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/2/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/3/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/4/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/5/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/6/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/7/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/8/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/9/device_ip", 0],
	["openWB/config/get/SmartHome/Devices/1/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/2/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/3/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/4/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/5/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/6/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/7/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/8/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/9/device_measureip", 0],
	["openWB/config/get/SmartHome/Devices/1/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/2/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/3/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/4/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/5/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/6/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/7/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/8/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/9/device_measureid", 0],
	["openWB/config/get/SmartHome/Devices/1/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/2/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/3/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/4/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/5/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/6/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/7/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/8/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/9/device_differentMeasurement", 0],
	["openWB/config/get/SmartHome/Devices/1/device_name", 0],
	["openWB/config/get/SmartHome/Devices/2/device_name", 0],
	["openWB/config/get/SmartHome/Devices/3/device_name", 0],
	["openWB/config/get/SmartHome/Devices/4/device_name", 0],
	["openWB/config/get/SmartHome/Devices/5/device_name", 0],
	["openWB/config/get/SmartHome/Devices/6/device_name", 0],
	["openWB/config/get/SmartHome/Devices/7/device_name", 0],
	["openWB/config/get/SmartHome/Devices/8/device_name", 0],
	["openWB/config/get/SmartHome/Devices/9/device_name", 0],
	["openWB/config/get/SmartHome/Devices/1/device_type", 0],
	["openWB/config/get/SmartHome/Devices/2/device_type", 0],
	["openWB/config/get/SmartHome/Devices/3/device_type", 0],
	["openWB/config/get/SmartHome/Devices/4/device_type", 0],
	["openWB/config/get/SmartHome/Devices/5/device_type", 0],
	["openWB/config/get/SmartHome/Devices/6/device_type", 0],
	["openWB/config/get/SmartHome/Devices/7/device_type", 0],
	["openWB/config/get/SmartHome/Devices/8/device_type", 0],
	["openWB/config/get/SmartHome/Devices/9/device_type", 0],
	["openWB/config/get/SmartHome/Devices/1/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/2/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/3/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/4/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/5/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/6/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/7/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/8/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/9/device_measureType", 0],
	["openWB/config/get/SmartHome/Devices/1/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/2/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/3/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/4/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/5/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/6/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/7/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/8/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/9/device_einschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/1/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/2/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/3/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/4/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/5/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/6/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/7/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/8/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/9/device_ausschaltschwelle", 0],
	["openWB/config/get/SmartHome/Devices/1/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/2/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/3/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/4/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/5/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/6/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/7/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/8/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/9/device_einschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/1/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/2/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/3/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/4/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/5/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/6/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/7/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/8/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/9/device_maxeinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/1/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/2/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/3/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/4/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/5/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/6/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/7/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/8/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/9/device_mineinschaltdauer", 0],
	["openWB/config/get/SmartHome/Devices/1/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/2/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/3/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/4/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/5/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/6/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/7/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/8/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/9/device_deactivateWhileEvCharging", 0],
	["openWB/config/get/SmartHome/Devices/1/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/2/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/3/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/4/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/5/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/6/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/7/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/8/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/9/device_speichersocbeforestop", 0],
	["openWB/config/get/SmartHome/Devices/1/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/2/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/3/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/4/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/5/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/6/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/7/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/8/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/9/device_speichersocbeforestart", 0],
	["openWB/config/get/SmartHome/Devices/1/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/2/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/3/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/4/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/5/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/6/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/7/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/8/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/9/device_temperatur_configured", 0],
	["openWB/config/get/SmartHome/Devices/1/device_ausschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/2/device_ausschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/3/device_ausschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/4/device_ausschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/5/device_ausschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/6/device_ausschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/7/device_ausschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/8/device_ausschaltverzoegerung", 0],
	["openWB/config/get/SmartHome/Devices/9/device_ausschaltverzoegerung", 0]
];
