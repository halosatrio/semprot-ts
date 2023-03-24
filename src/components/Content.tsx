import { DataParfum } from "@/types/data";

type ParfumProps = {
  data: DataParfum;
};

const Content = ({ data }: ParfumProps) => {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl my-2">{data?.name}</h1>
        <p className="font-light text-sm">
          {data?.brand}
          {" | "}
          <span>{data?.type}</span>
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={data?.image}
          alt={data?.name}
          width={300}
          className="border border-gray-500 rounded-xl"
        />
      </div>
      <div className="my-4 overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Concentrate</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data?.concentrate}
              </dd>
            </div>
            {typeof data?.notes === "string" ? (
              <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Top Notes</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data?.notes}
                </dd>
              </div>
            ) : (
              <>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Top Notes
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {data?.notes?.top}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Middle Notes
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {data?.notes?.middle}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Base Notes
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {data?.notes?.base}
                  </dd>
                </div>
              </>
            )}
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Longevity</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data?.longevity}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Sillage</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data?.sillage}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Projection</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data?.projection}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Link</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <a
                  href={data?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  visit product link
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Content;
