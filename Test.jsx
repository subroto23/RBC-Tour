<div class="w-[900px] h-[336px] bg-white border rounded-3xl flex justify-between shadow-2xl">
      <div class="w-96 border-r-2 border-dashed flex flex-col justify-between">
        <div class="bg-sky-500 h-16 rounded-tl-3xl flex items-center justify-center">
          <h4 class="text-white">ভ্রমণকারীর বিবারণ</h4>
        </div>
        <div class="bg-sky-100 h-[250px] pt-5">
          <div class="flex flex-col justify-between">
            <div class="flex flex-col items-center">
              <h3 class="text-orange-600 font-semibold">
                অর্থ প্রদানকারীঃ-
              </h3>
              <strong class="bg-purple-600 text-white py-1 px-2">
                {props.value.senderName}
              </strong>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-yellow-800 font-semibold">
                অর্থ গ্রহণকারীঃ-
              </h3>
              <strong class="bg-orange-600 text-white py-1 px-2">
                {props.value.receiverName}
              </strong>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-sky-600 font-semibold">প্রদানকৃত অর্থঃ</h3>
              <strong class="font-bolder text-xl bg-blue-900 text-white p-1">
                {props.value.value.receiveAmount}
              </strong>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-green-600 font-semibold">বকেয়ার পরিমাণঃ</h3>
              <strong class="font-bolder text-xl bg-orange-900 text-white p-1">
                {props.value.due}
              </strong>
            </div>
          </div>
        </div>
        <div class="bg-sky-500 h-6 rounded-bl-3xl w-full"></div>
      </div>
      <div class="w-full flex justify-between flex-col">
        <div>
          <div class="bg-sky-500 h-16 rounded-tr-3xl">
            <div class="grid grid-flow-col grid-cols-4 items-center h-16 px-5">
              <div class="text-4xl text-white flex justify-center">
                <BsFillCarFrontFill />
              </div>
              <div class="">
                <h3 class="text-white text-center">রূপসী বাংলা ক্লাব</h3>
              </div>
              <div>
                <h4 class="text-white text-center">আনন্দ ভ্রমণ</h4>
              </div>
              <div class="col-span-2">
                <h4 class="text-white text-center">টিকিট</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-flow-col grid-cols-4 px-5 gap-4">
            <div class="flex items-center h-full">
              <img src={img1} alt="BarCode" class="transform -rotate-90" />
            </div>
            <div class="flex flex-col justify-around gap-6">
              <div class="flex flex-col items-center">
                <h3 class="text-orange-600 font-semibold">ভ্রমণকারীর নামঃ</h3>
                <strong class="bg-purple-600 text-white py-1 px-2">
                  {props.value.senderName}
                </strong>
              </div>
              <div class="flex flex-col items-center">
                <h3 class="text-sky-600 font-semibold">ভ্রমণের স্থানঃ</h3>
                <strong>ড্রীম ভ্যালী</strong>
              </div>
              <div class="flex flex-col items-center">
                <h3 class="text-green-600 font-semibold">সময়ঃ</h3>
                <strong>সকালঃ ৭ টা</strong>
              </div>
            </div>
            <div class="flex flex-col justify-around gap-6">
              <div class="flex flex-col items-center">
                <h3 class="text-orange-600 font-semibold">গাড়ীর ধরণঃ</h3>
                <strong>মাইক্রোবাস</strong>
              </div>
              <div class="flex flex-col items-center">
                <h3 class="text-sky-600 font-semibold">সিটের বিবারণঃ</h3>
                <strong>
                  {sitNumber[Math.floor(Math.random() * (12 - 0 + 1)) + 0]}
                </strong>
              </div>
              <div class="flex flex-col items-center">
                <h3 class="text-green-600 font-semibold">ভ্রমণের তারিখঃ</h3>
                <strong>১৮/০৮/২০২৩ ইং</strong>
              </div>
            </div>
            <div class="flex flex-col justify-around gap-6">
              <div class="flex flex-col items-center">
                <h3 class="text-orange-600 font-semibold">ধার্যকৃত অর্থ</h3>
                <strong>{props.value.value.selectAmount}</strong>
              </div>
              <div class="flex flex-col items-center">
                <h3 class="text-sky-600 font-semibold">প্রদানকৃত অর্থঃ</h3>
                <strong class="font-bolder text-xl bg-blue-900 text-white p-1">
                  {props.value.value.receiveAmount}
                </strong>
              </div>
              <div class="flex flex-col items-center">
                <h3 class="text-green-600 font-semibold">বকেয়ার পরিমাণঃ</h3>
                <strong class="font-bolder text-xl bg-orange-900 text-white p-1">
                  {props.value.due}
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-sky-500 h-6 rounded-br-3xl w-full"></div>
      </div>
    </div>
