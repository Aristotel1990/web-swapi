
import _ from 'lodash';
export const initialState = {
    starship: [],
    vehicle:[],
   errore:null,
  };
  
  // Selector
  
  const reducer = (state, action) => {

    switch (action.type) {
      case "INSERT_DATA":
        return {
          ...state,
          starship:  action.itemStar,
          vehicle:action.itemVehic,
          errore:action.payload,
        };
      case 'UPDATE_DATA':
        const ttt=action.itemm;
        const identity=action._id
        if(action.path ==="starships"){
        const v = _.find(state.starship,{_id:identity});
        if(v){
          const newStarship = [...state.starship];
          const ReStar =newStarship.map(x=>x._id===v._id?{...x,count:ttt.count} : x )
          
          return {
            ...state,
            starship:ReStar    }
        }
       
        }else{
          const t = _.find(state.vehicle,{_id:identity});
          if(t){
            const newVehicle = [...state.vehicle];
            const ReVeh =newVehicle.map(x=>x._id===t._id?{...x,count:ttt.count} : x )
            
            return {
              ...state,
              vehicle:ReVeh        }
          }
         
        }
        
        case 'INC_DEC_VEH':
              const IdVeh=action._id
              const incVeh = action.inc;   
              const a = _.find(state.vehicle,{_id:IdVeh});
              if(a){
                 if(incVeh===true){
                  const bb = state.vehicle.map(x=>x._id===a._id?{...x,count:x.count+1 } : x )
                return{...state,vehicle:bb}

              }else{
                const bc = state.vehicle.map(x=>x._id===a._id & x.count>0?{...x,count:x.count-1 } : x )
                return{...state,vehicle:bc}
              }
                }
               
             
        case 'INC_DEC_STA':
              const IdStar=action._id
              const incStar = action.inc;   
              const b = _.find(state.starship,{_id:IdStar});
              if(b){
                 if(incStar===true){
                  const ab = state.starship.map(x=>x._id===b._id?{...x,count:x.count+1 } : x )
                  return{...state,starship:ab}

              }else{
                const ac =state.starship.map(x=>x._id===b._id & x.count>0?{...x,count:x.count-1 } : x )
                return{...state,starship:ac}
              }
                }
              case 'ERRORE':
               return {
          ...state,
          errore:action.payload
        }
      default:
        return state;
    }
  };
  
  export default reducer;