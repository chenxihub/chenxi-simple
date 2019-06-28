import {$paraGET, $paraPATCH} from "para-lib";
import API from "../config/api.config";

export const getUsersData = async () => $paraGET(API.NUMBERS);

export const getSystemData = async () => $paraGET(API.SYSTEM);

export const getUserAccountStatus = async (key, data) => $paraPATCH({
  url: `${API.RESACCOUNT}/${key}`,
  data,
});
