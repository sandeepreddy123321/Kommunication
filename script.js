function getUrlParameterValue(url, parameter) {
    if(!url) return null;
  const params = url.split("?");
  if(params.length <= 1) return null;
  
  const allParams = params[1].split("&");
  
  allParams.forEach(par => {
  	if(par.indexOf(parameter) >= 0) {
      const result = par.split("=");
      
      if(result[1] != parameter && result[0] === parameter) {
      	return result[1];
      }
    }
  	
  })
  return null;
}