export const requestgetTempData =async (data: any)=>{
  return await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data?.lat},${data?.lng}?key=WPW92RDBLNXBABXRPQTDZJ7KT`, {
    method: "GET",
    headers: {
      'Accept': "application/json",
    },
  }).then(res => res.json())
    .then(async (resData) => {
      return resData
    })
}