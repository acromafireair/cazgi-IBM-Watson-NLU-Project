import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      let listOfEmotions = this.props.emotions;
      let listOfEmotionsAsArray = Object.entries(listOfEmotions);
      let emotionDetails = listOfEmotionsAsArray.map((emotionDetail) => {
        let emotionListCollection = Object.entries(emotionDetail[1]);
        return <tr><td style={{border:"1px solid black"}}>emotionListCollection[0][0]</td><td style={{border:"1px solid black"}}>emotionListCollection[0][1]</td>
               <td style={{border:"1px solid black"}}>emotionListCollection[1][0]</td><td style={{border:"1px solid black"}}>emotionListCollection[1][1]</td>
               <td style={{border:"1px solid black"}}>emotionListCollection[2][0]</td><td style={{border:"1px solid black"}}>emotionListCollection[2][1]</td>
               <td style={{border:"1px solid black"}}>emotionListCollection[3][0]</td><td style={{border:"1px solid black"}}>emotionListCollection[3][1]</td>
               <td style={{border:"1px solid black"}}>emotionListCollection[4][0]</td><td style={{border:"1px solid black"}}>emotionListCollection[4][1]</td></tr>
      });
      return (  
        <div>
          {
          <table className="table table-bordered">
            <tbody>
            {
                emotionDetails
            }
            </tbody>
          </table>
          }
          </div>
          );
        }
    
}
export default EmotionTable;
