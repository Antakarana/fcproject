import {
  requestTypeGET,
  mainURL,
  extendMain,
  extendRockets,
  extendCrew,
} from './Path';
import apiRequest from './ApiRequest';

/**
 * Rockets Api Function
 * @return {Object}
 */
const serviceConnectionRockets = async () => {
  return new Promise(async (resolve, reject) => {
    const responseRockets = await apiRequest(
      mainURL + extendMain + extendRockets,
      requestTypeGET,
    );
    if (responseRockets) resolve(responseRockets);
  });
};

/**
 * Crew Api Function
 * @return {Object}
 */
const serviceConnectionCrew = async () => {
  return new Promise(async (resolve, reject) => {
    const responseCrew = await apiRequest(
      mainURL + extendMain + extendCrew,
      requestTypeGET,
    );
    if (responseCrew) resolve(responseCrew);
  });
};

export {serviceConnectionRockets, serviceConnectionCrew};