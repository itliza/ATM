let userData = {
		'USD': 1000,
		'EUR': 900,
		'UAH': 15000,
		'BIF': 20000,
		'AOA': 100
	},
	bankData = {
		'USD': {
			max: 3000,
			min: 100,
			img: '💵'
		},
		'EUR': {
			max: 1000,
			min: 50,
			img: '💶'
		},
		'UAH': {
			max: 0,
			min: 0,
			img: '💴'
		},
		'GBP': {
			max: 10000,
			min: 100,
			img: '💷'
		}
	}

const getMoney = (userData, bankData) => {
	return new Promise((resolve, reject)=> {
		let firstStep = confirm('Посмотреть баланс на карте?');
		firstStep ? resolve(userData) : reject({userData: userData, bankData: bankData})
	})
}
getMoney(userData, bankData)
	.then(
		function(){
			let data =[];
			for(let key in userData){
						data.push(key)
					}
			let secondStep;
				do{	
					secondStep = prompt(`В какой валюте Вы хотите проверить баланс? ${data}`);
				} while(!userData.hasOwnProperty(secondStep));
			console.log(`Баланс составляет: ${userData[secondStep]}`,secondStep); 
		},
		function(){
			let chooseCurrency;
			let data = [];
			for(let key in bankData){
				if(bankData[key].max > 0)
						data.push(key)
					}

				do{
					chooseCurrency = prompt(`В какой валюте вы хотите снять наличные? ${data}`);
				} while(!bankData.hasOwnProperty(chooseCurrency) || bankData[chooseCurrency].max===0);
					if(chooseCurrency){
						let takeMoney;
							takeMoney = prompt('Какую сумму ввы хотите снять?');

							if(takeMoney > bankData[chooseCurrency].max){
								console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${bankData[chooseCurrency].max} ${chooseCurrency}`)
							} else if (takeMoney < bankData[chooseCurrency].min){
								console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${bankData[chooseCurrency].min} ${chooseCurrency}`)
							} else {
								console.log(`Вот Ваши денежки ${takeMoney} ${chooseCurrency} ${bankData[chooseCurrency].img}`)
							}
					}				
		}
	)
	.finally(
		function(){
			console.log(`Спасибо, хорошего дня 😊`)
		}
	)
	































