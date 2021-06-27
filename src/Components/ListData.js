const ListData = ({items}) => {
  return (
    <div>
          <h2>Covid Stats</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Country</th>
                <th>NewConfirmed</th>
                <th>TotalConfirmed</th>
                <th>NewDeaths</th>
                <th>TotalDeaths</th>
                <th>NewRecovered</th>
                <th>TotalRecovered</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map( item => {
                  return <tr>
                    <td>{item.Country}</td>
                    <td>{item.NewConfirmed}</td>
                    <td>{item.TotalConfirmed}</td>
                    <td>{item.NewDeaths}</td>
                    <td>{item.TotalDeaths}</td>
                    <td>{item.NewRecovered}</td>
                    <td>{item.TotalRecovered}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
         </div>
  );
}
 
export default ListData;