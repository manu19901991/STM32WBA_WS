----!
Presentation
----!

# Add application code to move to discoverable

1.code needs to be added in **STM32_WPAN/App/app_ble.c** inside the function App_BLE_Init ~line 293 in **/*USER CODE BEGIN APP_BLE_Init_2*/**

```c
  aci_gap_set_discoverable(ADV_TYPE, ADV_INTERVAL_MIN,ADV_INTERVAL_MAX,
                                           CFG_BD_ADDRESS_TYPE,
                                           ADV_FILTER,
                                           0, 0, 0, 0, 0, 0);

   aci_gap_update_adv_data(sizeof(a_AdvData), (uint8_t*) a_AdvData);
```
2.stiil in **STM32_WPAN/App/app_ble.c** inside SVCCTL_App_Notification function
~line 343 in **/*USER CODE BEGIN EVT_DISCONN_COMPLETE*/**

```c
  aci_gap_set_discoverable(ADV_TYPE, ADV_INTERVAL_MIN,ADV_INTERVAL_MAX,
                                           CFG_BD_ADDRESS_TYPE,
                                           ADV_FILTER,
                                           0, 0, 0, 0, 0, 0);

   aci_gap_update_adv_data(sizeof(a_AdvData), (uint8_t*) a_AdvData);
```




