async function fetchData() {
    const url = 'https://api3.adsterratools.com/advertiser/stats.xml?start_date=2022-03-06&finish_date=2022-03-06&group_by=date';
    const options = {
      method: 'GET',
      headers: { Accept: 'application/json', 'X-API-Key': '2a17966effb55e5c84979517f511cf4f' }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  