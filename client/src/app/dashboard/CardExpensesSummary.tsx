import {
  ExpenseByCategorySummary,
  useGetDashboardMetricsQuery,
} from "@/state/api";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type ExpenseSums = {
  // category: string - ключи будут произвольными
  [category: string]: number;
};

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

const CardExpensesSummary = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  const expenseByCategorySummary =
    dashboardMetrics?.expenseByCategorySummary || [];

  // Для хранения суммы расходов по категориям.
  // acc - объект, который накапливает суммы расходов по категориям. Инициализируется пустым объектом, типа ExpenseSums
  // item - текущий элемент из массива expenseByCategorySummary. Каждый элемент должен иметь структуру ExpenseByCategorySummary

  const expenseSums = expenseByCategorySummary.reduce(
    (acc: ExpenseSums, item: ExpenseByCategorySummary) => {
      // формирую строку
      const category = item.category + " Expenses";
      // конвертация суммы
      const amount = parseInt(item.amount, 10);
      // добавление суммы к категории (если ключ category еще не существует в аккумуляторе, то он инициализируется значением "0")
      if (!acc[category]) acc[category] = 0;
      // затем значение поля amount прибавляется к уже существующей сумме для этой категории
      acc[category] += amount;
      return acc;
    },
    {}
  );

  const expenseCategories = Object.entries(expenseSums).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const totalExpenses = expenseCategories.reduce(
    (acc, category: { value: number }) => acc + category.value,
    0
  );

  const formattedTotalExpenses = totalExpenses.toFixed(2);

  return (
    <div className="row-span-3 bg-white-500 shadow-md rounded-2xl flex flex-col justify-between">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Expense Summary
            </h2>
            <hr />
          </div>
          {/* BODY */}
          <div className="xl:flex justify-between pr-7">
            {/* CHART */}
            <div className="relative basis-3/5">
              {/* Диаграмма */}
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  {/* data - данные для диаграммы
                  innerRadius - внутренний радиус
                  */}
                  <Pie
                    data={expenseCategories}
                    innerRadius={50}
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell
                        // different colors - fill={colors[index % colors.length]}
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5">
                <span className="font-bold text-xl">
                  ${formattedTotalExpenses}
                </span>
              </div>
            </div>
            {/* LABEL SECTION */}
          </div>
        </>
      )}
    </div>
  );
};

export default CardExpensesSummary;
