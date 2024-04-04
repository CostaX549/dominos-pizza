
import { Link } from '@inertiajs/react';

export default function Table({ items, columns, primary, action }) {
    return (
        <div className="relative overflow-x-auto border shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">{primary}</th>
                        {columns.map((column) =>
                            <th key={column} scope="col" className="px-6 py-3">{column}</th>
                        )}
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) =>
                        <tr key={item.id} className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900">
                                #{item.id}
                            </th>
                            {columns.map((column) =>
                                <td key={column} className="px-6 py-4">
                                    {item[column]}
                                </td>
                            )}
                            <td className="px-6 py-4">
                            <Link  href={route(action, item.id)} className="font-medium text-blue-600 hover:underline">View Details</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
