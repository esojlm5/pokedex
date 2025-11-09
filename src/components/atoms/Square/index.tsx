import { clockWiser } from "@/utils/clockWise";

const Square = ({ items }: { items: number[][] }) => {
  const gridCalc = items[0].length;
  const oldItems = items;
  const itemsRotated = clockWiser(items);

  return (
    <div className="grid grid-cols-2 gap-10 justify-center  mt-4 max-w-[700] ml-auto mr-auto">
      <div>
        <h3 className="text-xl text-center">Old values</h3>
        <div
          className={`grid grid-cols-${gridCalc} gap-1  mt-4 text-center bg-black p-1 `}
        >
          {oldItems.map((row) =>
            row.map((item, index) => (
              <span
                key={index}
                className=" bg-white p-2 aspect-square flex items-center justify-center text-2xl"
              >
                {item}{" "}
              </span>
            )),
          )}
        </div>
      </div>
      <div>
        <h3 className="text-xl text-center">Format values</h3>
        <div
          className={`grid grid-cols-${gridCalc} gap-1 mt-4 text-center bg-black p-1 `}
        >
          {itemsRotated.map((row) =>
            row.map((item, index) => (
              <span
                key={index}
                className=" bg-white p-2 aspect-square flex items-center justify-center text-2xl"
              >
                {item}{" "}
              </span>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Square;
