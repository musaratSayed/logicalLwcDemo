import { LightningElement,track,wire } from 'lwc';

import mapDemo from '@salesforce/apex/UtilityClass.mapDemo';

export default class LogicalLwcDemo extends LightningElement {

    @track greeting ="Welcome to LWC";
    @track message = "Good Morning";
    @track error;
    @track data;
    @track records;
    @track maps;

    @track contacts = [
        {
            Id: '987654321',
            Name:'University of Berkeley'
        },
        {
            Id: '7777777',
            Name:'University of California'
        },
        {
            Id: '876987654',
            Name: 'Middlesex University'
        },
        {
            Id: '555555555',
            Name: 'UCSF'
        },

    ];

    @wire(mapDemo) 
    wireData(error,data)
    {
        if(error)
        {
            this.error = error;
            this.records = undefined;
            /* eslint-disable no-console */
            console.log('Data = '+ data);
        }
        if(data)
        {
            this.records = data;
            this.error=undefined;
             /* eslint-disable no-console */
             console.log('Error = ' + this.error);
        }
    }
   // </* eslint-disable no-console *>
    //console.log(this.records);

    handleClick()
    {
        mapDemo().then(result=>{
            console.log(result);
            const options = [];
           for(let key in result)
           {
               if(key)
               {
                   options.push(
                       {
                           key: key,
                           value: result[key]
                       }
                   )
               }
           }
           console.log(options);
           this.maps=options;
        })
        .catch(error => {
            this.error = error;
        })
    }

}